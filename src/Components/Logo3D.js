import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const Logo3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x1f1f1f, 10, 30);

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 2, 13);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x1f1f1f);
    mount.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x00ffff, 1.5, 50);
    pointLight.castShadow = true;
    pointLight.position.set(0, 3, 0);
    scene.add(pointLight);

    // Floor reflection
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshPhysicalMaterial({
        color: "#111",
        metalness: 0.8,
        roughness: 0.3,
        reflectivity: 0.5,
        clearcoat: 1,
        transparent: true,
        opacity: 0.7,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.position.y = -1;
    scene.add(floor);

    // Logo group
    const logoGroup = new THREE.Group();
    const material = new THREE.MeshPhysicalMaterial({
      color: "#8a2be2",
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1,
      emissive: new THREE.Color(0x4400ff),
      emissiveIntensity: 0.1,
    });

    const createPart = (geo, pos, rot) => {
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(...pos);
      mesh.rotation.set(...rot);
      mesh.castShadow = true;
      logoGroup.add(mesh);
    };

    createPart(new THREE.CylinderGeometry(0.2, 0.2, 2.5, 32), [-1, 1, 0], [0, 0, Math.PI]);
    createPart(new THREE.CylinderGeometry(0.2, 0.2, 1.3, 32), [-0.3, 0.4, 0], [0, 0, Math.PI / 7]);
    createPart(new THREE.ConeGeometry(0.2, 1.4, 32), [-0.66, 1.6, 0], [0, 0, 0.15]);
    createPart(new THREE.CylinderGeometry(0.2, 0.2, 1.3, 32), [0.3, 0.4, 0], [0, 0, -Math.PI / 7]);
    createPart(new THREE.CylinderGeometry(0.2, 0.2, 1, 32), [0, -0.6, 0], [0, 0, Math.PI]);
    createPart(new THREE.CylinderGeometry(0.2, 0.2, 2.5, 32), [1, 1, 0], [0, 0, -Math.PI]);
    createPart(new THREE.ConeGeometry(0.2, 1.4, 32), [0.66, 1.6, 0], [0, 0, -0.15]);

    scene.add(logoGroup);

    // Animated particles
    const particlesCount = 200;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: "#ffffff",
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // Text
    const fontLoader = new FontLoader();
    fontLoader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", (font) => {
      const textGeo = new TextGeometry("Youness M'hijane", {
        font,
        size: 0.8,
        height: 0.15,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
      });
      const textMat = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 0.6,
        roughness: 0.3,
        emissive: new THREE.Color(0x222222),
      });
      const text = new THREE.Mesh(textGeo, textMat);
      text.castShadow = true;
      text.position.set(-4.5, -0.6, 8);
      scene.add(text);

      // Pulse effect
      let pulse = 0;
      const animateText = () => {
        pulse += 0.02;
        text.scale.setScalar(1 + Math.sin(pulse) * 0.02);
        requestAnimationFrame(animateText);
      };
      animateText();
    });

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      logoGroup.rotation.y += 0.01;
      pointLight.position.x = Math.sin(t) * 5;
      pointLight.position.z = Math.cos(t) * 5;

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

export default Logo3D;
