
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Simple DNA Base Component
const DNABase = ({ position, color, label }: { position: [number, number, number], color: string, label: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <planeGeometry args={[0.4, 0.2]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </group>
  );
};

// Simple DNA Helix Component
const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const bases = [
    { pos: [2, 2, 0] as [number, number, number], color: "#ff6b6b", label: "A" },
    { pos: [-2, 2, 0] as [number, number, number], color: "#4ecdc4", label: "T" },
    { pos: [1.5, 1, 1] as [number, number, number], color: "#45b7d1", label: "G" },
    { pos: [-1.5, 1, 1] as [number, number, number], color: "#96ceb4", label: "C" },
    { pos: [2, 0, 2] as [number, number, number], color: "#ffd93d", label: "A" },
    { pos: [-2, 0, 2] as [number, number, number], color: "#ff9ff3", label: "T" },
  ];

  return (
    <group ref={groupRef}>
      {bases.map((base, index) => (
        <DNABase
          key={index}
          position={base.pos}
          color={base.color}
          label={base.label}
        />
      ))}
      
      {/* DNA Backbone */}
      {bases.map((_, index) => {
        if (index < bases.length - 1) {
          return (
            <mesh key={`backbone-${index}`} position={[0, bases[index].pos[1] - 0.5, bases[index].pos[2] + 0.5]}>
              <cylinderGeometry args={[0.05, 0.05, 1]} />
              <meshStandardMaterial color="#8b5cf6" />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
};

// Simple Protein Structure
const ProteinStructure = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Protein chain */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[Math.cos(i) * 2, i * 0.5 - 2, Math.sin(i) * 2]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial color={`hsl(${i * 45}, 70%, 60%)`} />
        </mesh>
      ))}
    </group>
  );
};

// Simple Cell Structure
const CellStructure = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cell membrane */}
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="#88ccff" transparent opacity={0.3} />
      </mesh>
      
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#ff8888" />
      </mesh>
      
      {/* Organelles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} position={[Math.cos(i) * 2, Math.sin(i) * 2, Math.cos(i * 2)]}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshStandardMaterial color="#88ff88" />
        </mesh>
      ))}
    </group>
  );
};

const MolecularVisualization = () => {
  const [selectedMolecule, setSelectedMolecule] = useState("DNA");

  const molecules = [
    { name: "DNA", description: "Double helix structure showing base pairs" },
    { name: "Protein", description: "Amino acid chains and folding patterns" },
    { name: "Cell", description: "Basic cellular components and organelles" }
  ];

  const renderMolecule = () => {
    switch (selectedMolecule) {
      case "DNA":
        return <DNAHelix />;
      case "Protein":
        return <ProteinStructure />;
      case "Cell":
        return <CellStructure />;
      default:
        return <DNAHelix />;
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [5, 5, 5], fov: 60 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#f0f9ff');
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {renderMolecule()}
        
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true}
          autoRotate={false}
        />
      </Canvas>

      {/* Controls Overlay */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-2">3D Molecular Models</h3>
        <div className="space-y-2">
          {molecules.map((molecule) => (
            <button
              key={molecule.name}
              onClick={() => setSelectedMolecule(molecule.name)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedMolecule === molecule.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {molecule.name}
            </button>
          ))}
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
        <h4 className="font-semibold text-gray-800 mb-1">{selectedMolecule} Structure</h4>
        <p className="text-sm text-gray-600">
          {molecules.find(m => m.name === selectedMolecule)?.description}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          🖱️ Click and drag to rotate • 🔍 Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default MolecularVisualization;
