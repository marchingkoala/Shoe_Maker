import "./App.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function TesterShoe({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customeColor.lace}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customeColor.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customeColor.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customeColor.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customeColor.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customeColor.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customeColor.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customeColor.patch}
      />
    </group>
  );
}

//run npx gltfjsx 'path' to convert file into a js file

function Model() {
  const [mesh, setMesh] = useState("#ffffff");
  const [lace, setLace] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");

  return (
    <div className="app_container">
      <div className="shoe_container">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight>
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <TesterShoe
                customeColor={{
                  mesh: mesh,
                  lace: lace,
                  caps: caps,
                  inner: inner,
                  sole: sole,
                  stripes: stripes,
                  band: band,
                  patch: patch,
                }}
              />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
              <Environment preset="city" />
            </ambientLight>
          </Suspense>
        </Canvas>
      </div>
      <div className="color_picker">
        <h2>Color Picker</h2>
        <div className="input_container">
          <input
            type="color"
            id="mesh"
            name="mesh"
            value={mesh}
            onChange={(e) => setMesh(e.target.value)}
          />
          <label for="mesh">MESH</label>
          <input
            type="color"
            id="lace"
            name="lace"
            value={lace}
            onChange={(e) => setLace(e.target.value)}
          />
          <label for="lace">LACE</label>
          <input
            type="color"
            id="caps"
            name="caps"
            value={caps}
            onChange={(e) => setCaps(e.target.value)}
          />
          <label for="caps">EYELET</label>
          <input
            type="color"
            id="inner"
            name="inner"
            value={inner}
            onChange={(e) => setInner(e.target.value)}
          />
          <label for="inner">LINING</label>
          <input
            type="color"
            id="sole"
            name="sole"
            value={sole}
            onChange={(e) => setSole(e.target.value)}
          />
          <label for="sole">OUTSOLE</label>
          <input
            type="color"
            id="stripes"
            name="stripes"
            value={stripes}
            onChange={(e) => setStripes(e.target.value)}
          />
          <label for="stripes">STRIPES</label>
          <input
            type="color"
            id="band"
            name="band"
            value={band}
            onChange={(e) => setBand(e.target.value)}
          />
          <label for="band">PULL TAB</label>
          <input
            type="color"
            id="patch"
            name="patch"
            value={patch}
            onChange={(e) => setPatch(e.target.value)}
          />
          <label for="patch">HEEL PATCH</label>
        </div>
      </div>
    </div>
  );
}

export default Model;
