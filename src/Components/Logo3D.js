import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";  // Importer FontLoader
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";  // Importer TextGeometry

const Logo3D = () => {
  const mountRef = useRef(null);  // Référence à l'élément DOM pour rendre la scène 3D

  useEffect(() => {
    const mountNode = mountRef.current;

    // Initialisation de la scène, caméra et renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2, 10); // Position de la caméra

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountNode.clientWidth,
      mountNode.clientHeight
    );
    renderer.shadowMap.enabled = true; // Activer les ombres
    renderer.setClearColor(0x1f1f1f); // Définir la couleur de fond (gris clair)
    mountNode.appendChild(renderer.domElement);

    // Contrôles de la caméra
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lumière ambiante
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Lumière directionnelle pour les ombres dynamiques
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 1);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;  // Résolution de la carte d'ombres
    directionalLight.shadow.mapSize.height = 1024;

    scene.add(directionalLight);

    // Lumière ponctuelle qui se déplace
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(0, 5, 0);
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 1024;  // Résolution de la carte d'ombres pour la lumière ponctuelle
    pointLight.shadow.mapSize.height = 1024;
    scene.add(pointLight);

    // Plan au sol
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: "#1f1f1f" });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;  // Assurer que le plan reçoit les ombres
    scene.add(plane);

    // Groupe pour le logo
    const logoGroup = new THREE.Group();

    // Matériau pour les cylindres
    const material = new THREE.MeshStandardMaterial({
      color: "#6A0DAD",
      roughness: 0.3,  // Surface plus lisse
      metalness: 0.3
    });

    // Cylindres et cônes pour le logo
    const cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.5, 32), material);
    cylinder1.position.set(-1, 1, 0);
    cylinder1.rotation.set(0, 0, Math.PI); // Rotation selon le code original
    cylinder1.castShadow = true;
    logoGroup.add(cylinder1);

    const cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.3, 32), material);
    cylinder2.position.set(-0.3, 0.4, 0);
    cylinder2.rotation.set(0, 0, Math.PI / 7);
    cylinder2.castShadow = true;
    logoGroup.add(cylinder2);

    const cylinder7 = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.4, 32), material);
    cylinder7.position.set(-0.66, 1.6, 0);
    cylinder7.rotation.set(0, 0, 0.15);
    cylinder7.castShadow = true;
    logoGroup.add(cylinder7);

    const cylinder3 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.3, 32), material);
    cylinder3.position.set(0.3, 0.4, 0);
    cylinder3.rotation.set(0, 0, -Math.PI / 7);
    cylinder3.castShadow = true;
    logoGroup.add(cylinder3);

    const cylinder4 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1, 32), material);
    cylinder4.position.set(0, -0.6, 0);
    cylinder4.rotation.set(0, 0, Math.PI);
    cylinder4.castShadow = true;
    logoGroup.add(cylinder4);

    const cylinder5 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.5, 32), material);
    cylinder5.position.set(1, 1, 0);
    cylinder5.rotation.set(0, 0, -Math.PI);
    cylinder5.castShadow = true;
    logoGroup.add(cylinder5);

    const cylinder6 = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.4, 32), material);
    cylinder6.position.set(0.66, 1.6, 0);
    cylinder6.rotation.set(0, 0, -0.15);
    cylinder6.castShadow = true;
    logoGroup.add(cylinder6);

    // Ajouter le groupe de logo à la scène
    scene.add(logoGroup);

    // Chargement de la police et création du texte 3D
    const fontLoader = new FontLoader();
    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', // Chemin de la police
      (font) => {
        const textGeometry = new TextGeometry("Y o u n e s s  M' h i j a n e", {
          font: font,
          size: 1,  // Taille du texte
          depth: 0.1,  // Épaisseur du texte
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.5,
          bevelSize: 0.2,
        });

        const textMaterial = new THREE.MeshStandardMaterial({
          color: 0x000000,  // Couleur du texte (noir)
          roughness: 0.5,
          metalness: 0.5,
        });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-8, -0.5, 9); // Positionner le texte sur le plan
        scene.add(textMesh);  // Ajouter le texte à la scène
      }
    );

    // Fonction d'animation
    const animate = () => {
      logoGroup.rotation.y += 0.01;  // Rotation continue du logo
      pointLight.position.x = Math.sin(Date.now() * 0.001) * 5;
      pointLight.position.z = Math.cos(Date.now() * 0.001) * 5;

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate); // Boucle d'animation
    };
    animate();

    // Nettoyage à la suppression du composant
    return () => {
      mountNode.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);  // L'effet s'exécute une seule fois au montage

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default Logo3D;
