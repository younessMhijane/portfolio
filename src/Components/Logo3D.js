import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";  // Importer FontLoader
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";  // Importer TextGeometry

const Logo3D = () => {
  const mountRef = useRef(null);  // Reference to the DOM element to render the 3D scene

  useEffect(() => {
    const mountNode = mountRef.current;

    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2, 10); // Position the camera

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountNode.clientWidth,
      mountNode.clientHeight
    );
    renderer.shadowMap.enabled = true; // Enable shadow mapping
    renderer.setClearColor(0x1f1f1f); // Set background color to light gray (or any color you prefer)
    mountNode.appendChild(renderer.domElement);

    // Camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light for dynamic shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 1);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;  // Set shadow map resolution
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.1; // Shadow camera near and far planes
    directionalLight.shadow.camera.far = 10;
    directionalLight.shadow.camera.left = -5;  // Shadow camera bounds
    directionalLight.shadow.camera.right = 5;
    directionalLight.shadow.camera.top = 5;
    directionalLight.shadow.camera.bottom = -5;
    scene.add(directionalLight);

    // Point light that moves
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(0, 5, 0);
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 1024;  // Set shadow map resolution for point light
    pointLight.shadow.mapSize.height = 1024;
    scene.add(pointLight);

    // Ground plane
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: "#1f1f1f" });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;  // Ensure the plane receives shadows
    scene.add(plane);

    // Load HDR environment
    const loader = new RGBELoader();
    loader.load(
      "https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/hdri/sunset.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        scene.background = texture;  // Set background to the HDR environment
      }
    );

    // Group for the logo
    const logoGroup = new THREE.Group();

    // Materials for cylinders

    const material = new THREE.MeshStandardMaterial({
      color: "#6A0DAD",
      roughness: 0.3,  // Smoother surface
      metalness: 0.3
    });

    // First Cylinder
    const cylinder1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 2.5, 32),
      material
    );
    cylinder1.position.set(-1, 1, 0);
    cylinder1.rotation.set(0, 0, Math.PI); // Rotation as per original code
    cylinder1.castShadow = true; // Ensure it casts shadows
    logoGroup.add(cylinder1);

    // Second Cylinder
    const cylinder2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 1.3, 32),
      material
    );
    cylinder2.position.set(-0.3, 0.4, 0);
    cylinder2.rotation.set(0, 0, Math.PI / 7);
    cylinder2.castShadow = true; // Ensure it casts shadows
    logoGroup.add(cylinder2);
    // seven Cylinder
    const cylinder7 = new THREE.Mesh(
      new THREE.ConeGeometry( 0.2, 1.4, 32 ),
      material
    );
    cylinder7.position.set(-0.66, 1.6, 0);
    cylinder7.rotation.set(0, 0, 0.15);
    cylinder7.castShadow = true; // Ensure it casts shadows
    logoGroup.add(cylinder7);

    // Third Cylinder
    const cylinder3 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 1.3, 32),
      material
    );
    cylinder3.position.set(0.3, 0.4, 0);
    cylinder3.rotation.set(0, 0, -Math.PI / 7);
    cylinder3.castShadow = true; // Ensure it casts shadows
    logoGroup.add(cylinder3);

    // Fourth Cylinder
    const cylinder4 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 1, 32),
      material
    );
    cylinder4.position.set(0, -0.6, 0);
    cylinder4.rotation.set(0, 0, Math.PI);
    cylinder4.castShadow = true; // Ensure it casts shadows
    logoGroup.add(cylinder4);

    // Fifth Cylinder
    const cylinder5 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 2.5, 32),
      material
    );
    cylinder5.position.set(1, 1, 0);
    cylinder5.rotation.set(0, 0, -Math.PI);
    cylinder5.castShadow = true; // Ensure it casts shadows
    logoGroup.add(cylinder5);
    // six Cylinder
    const cylinder6 = new THREE.Mesh(
      new THREE.ConeGeometry( 0.2, 1.4, 32 ),
      material
    );
    cylinder6.position.set(0.66, 1.6, 0);
    cylinder6.rotation.set(0, 0, -0.15);
    cylinder6.castShadow = true; // Ensure it casts shadows
    logoGroup.add(cylinder6);

    // Add logo group to the scene
    scene.add(logoGroup);

    // Load Font and create 3D text
    const fontLoader = new FontLoader();
    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', // Font path
      (font) => {
        const textGeometry = new TextGeometry("Y o u n e s s  M' h i j a n e", {
          font: font,
          size: 1,  // Text size
          height: 0.1,  // Text thickness
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.5,
          bevelSize: 0.2,
        });

        const textMaterial = new THREE.MeshStandardMaterial({
          color: 0x000000,  // Text color (black)
          roughness: 0.5,
          metalness: 0.5,
        });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-8, -0.5, 9); // Position text on the plane
        scene.add(textMesh);  // Add text to the scene
      }
    );

    // Animation function
    const animate = () => {
      logoGroup.rotation.y += 0.01;  // Continuous rotation of the logo
      pointLight.position.x = Math.sin(Date.now() * 0.001) * 5;
      pointLight.position.z = Math.cos(Date.now() * 0.001) * 5;

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate); // Animation loop
    };
    animate();

    // Cleanup on component unmount
    return () => {
      mountNode.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);  // Effect runs once on mount

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default Logo3D;
