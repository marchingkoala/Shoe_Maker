import React from 'react';
import { Suspense, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'

function Jogger({...props}) {
  const { nodes, materials } = useGLTF('/TQ-1910 applied modifier.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.STITCH_COLLAR.geometry} material={materials['NYLON LINING']} material-color={props.customeColor.nylon}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.STITCH_EYESTAY.geometry} material={materials['SUEDE BURGUNDY']} material-color={props.customeColor.suede} position={[0.304, 0.728, -0.089]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.222, 0.227]} />
      <mesh geometry={nodes.STITCH_HEEL_COUNTER.geometry} material={materials['SUEDE DK GRAY HEEL COUNTER']} material-color={props.customeColor.heelPU} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.249, 0.221, 0.222]} />
      <mesh geometry={nodes.STITCH_MEDIAL_DECO.geometry} material={materials['NYLON LINING']} material-color={props.customeColor.nylon} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.STITCH_TOECAP_.geometry} material={materials.suede} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.25, 0.222, 0.223]} />
      <mesh geometry={nodes.EVA.geometry} material={materials.EVA} position={[-0.05, -0.68, 0.031]} material-color={props.customeColor.eva} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.EVA_COLORED_STRIPE.geometry} material={materials['EVA MIDSOLE STRIPE BURGUNDY']} material-color={props.customeColor.midsoleSTR} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.EVA_FOXING.geometry} material={materials.EVA} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TPR.geometry} material={materials['TPR GUM']} material-color={props.customeColor.tpr} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.SOLEPLATE_EVA.geometry} material={materials.EVA} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.LOGO_MUSTACHE_DH_.geometry} material={materials['LOGO MUSTACHE']} material-color={props.customeColor.backLogo} position={[-2.785, 0.647, -0.173]} rotation={[1.574, -0.453, 1.549]} scale={4.388} />
      <mesh geometry={nodes.LOGO_SIDE_WORDMARK_.geometry} material={materials['LOGO SIDE']} material-color={props.customeColor.sideLogo} position={[-0.413, 0.612, -0.608]} rotation={[-1.705, -0.418, -0.231]} scale={[-11.684, -15.342, -10.815]} />
      <mesh geometry={nodes.EYESTAY.geometry} material={materials['SUEDE BURGUNDY']} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.HEEL_COUNTER.geometry} material={materials['SUEDE DK GRAY HEEL COUNTER']} material-color={props.customeColor.heelPU} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.INSOLE.geometry} material={materials.INSOLE} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.LACEKEEPER.geometry} material={materials['NYLON LACE KEEPER']} material-color={props.customeColor.nylon}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.LACES.geometry} material={materials['LACE COTTON']} material-color={props.customeColor.lace} position={[-0.024, 1.322, 0.056]} rotation={[0.011, -0.083, -0.012]} scale={[0.335, 0.415, 0.415]} />
      <group position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials['NYLON LINING']} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['NYLON LINING']} />
      </group>
      <mesh geometry={nodes.MUSTACHE.geometry} material={materials['SUEDE DK GRAY MUSTACHE']} material-color={props.customeColor.heelPU} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <group position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]}>
        <mesh geometry={nodes.Cube016_1.geometry} material={materials['NYLON UPPER']} material-color={props.customeColor.nylon} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials['NYLON LINING']} />
      </group>
      <mesh geometry={nodes.SIDEWALL_OVERLAY.geometry} material={materials['WHITE LEATHER SIDE OVERLAY']} material-color={props.customeColor.sidePU} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.SIDEWALL_UNDERLAY.geometry} material={materials['SUEDE SIDE UNDERLAY']} material-color={props.customeColor.sidePU} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TOE_CAP.geometry} material={materials['SUEDE TOE CAP']} material-color={props.customeColor.toeCap} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TONGUE.geometry} material={materials['NYLON TONGUE']} material-color={props.customeColor.nylon} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TONGUE_BINDING.geometry} material={materials['NYLON LINING']} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TONGUE_LABEL.geometry} material={materials['TONGUE LABEL NYLON']} material-color={props.customeColor.label} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
    </group>
  )
}


const Tester = () => {

  const [suede, setSuede ]  = useState("#ffffff")
  const [heelPU, setHeelPU ]  = useState("#ffffff")
  const [toeCap, setToeCap] = useState("#ffffff")
  const [sidePU, setSidePU] = useState("#ffffff")
  const [nylon, setNylon] = useState("#ffffff")
  const [eva, setEva] = useState("#ffffff")
  const [lace, setLace] = useState("#ffffff")
  const [tpr, setTpr] = useState("green")
  const [midsoleSTR, setMidsoleSTP] = useState("#ffffff")
  const [label, setLabel] = useState("#ffffff")
  const [sideLogo, setSideLogo] = useState("green")
  const [backLogo, setBackLogo] = useState("green")

    return (
    <div className='app_container'>
      <div className='shoe_container'>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight>
            <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
        <Jogger customeColor ={{ suede:suede, heelPU:heelPU, toeCap:toeCap, sidePU:sidePU, lace:lace, 
          eva:eva, tpr:tpr, nylon:nylon, midsoleSTR:midsoleSTR, label:label, sideLogo:sideLogo, backLogo:backLogo}} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        <Environment preset='city'/>
          </ambientLight>
        </Suspense>
      </Canvas>
      </div>
      <div className='color_picker'>
      <h2>Color Picker</h2>
      <div className='input_container'>
        <input type="color" id="suede" name="suede" value={suede} onChange={(e)=> setSuede(e.target.value)}/>
        <label for="mesh">Eyelet Suede</label>
        <input type="color" id="heelPU" name="heelPU" value={heelPU} onChange={(e)=> setHeelPU(e.target.value)}/>
        <label for="mesh">Heel PU</label>
        <input type="color" id="toeCap" name="toeCap" value={toeCap} onChange={(e)=> setToeCap(e.target.value)}/>
        <label for="mesh">Toe Cap</label>
        <input type="color" id="sidePU" name="sidePU" value={sidePU} onChange={(e)=> setSidePU(e.target.value)}/>
        <label for="mesh">Side PU</label>
        <input type="color" id="eva" name="eva" value={eva} onChange={(e)=> setEva(e.target.value)}/>
        <label for="mesh">EVA</label>
        <input type="color" id="tpr" name="tpr" value={tpr} onChange={(e)=> setTpr(e.target.value)}/>
        <label for="mesh">TPR</label>
        <input type="color" id="nylon" name="nylon" value={nylon} onChange={(e)=> setNylon(e.target.value)}/>
        <label for="mesh">Nylon</label>
        <input type="color" id="lace" name="lace" value={lace} onChange={(e)=> setLace(e.target.value)}/>
        <label for="mesh">Lace</label>
        <input type="color" id="midsoleSTR" name="midsoleSTR" value={midsoleSTR} onChange={(e)=> setMidsoleSTP(e.target.value)}/>
        <label for="mesh">Midsole Stripe</label>
        <input type="color" id="label" name="label" value={label} onChange={(e)=> setLabel(e.target.value)}/>
        <label for="mesh">Tongue Label</label>
        <input type="color" id="sideLogo" name="sideLogo" value={sideLogo} onChange={(e)=> setSideLogo(e.target.value)}/>
        <label for="mesh">Side Logo</label>
        <input type="color" id="backLogo" name="backLogo" value={backLogo} onChange={(e)=> setBackLogo(e.target.value)}/>
        <label for="mesh">Back Logo</label>
      </div>
      </div>
    </div>
    );
};

export default Tester;