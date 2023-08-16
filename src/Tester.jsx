import React from 'react';
import { Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio';
import { HexColorPicker } from 'react-colorful';

//using valtio's proxy for better state management
//useState below was looking a little too messy
const state = proxy({
  current: "blank",
  items: {
    suede:"#ffffff",
    heelPU:"#ffffff",
    toeCap:"#ffffff",
    sidePU:"#ffffff",
    nylon:"#ffffff",
    eva:"#ffffff",
    lace:"#ffffff",
    tpr:"#ffffff",
    midsoleSTR:"#ffffff",
    label:"#ffffff",
    sideLogo:"#ffffff",
    backLogo:"#ffffff",
  }
})

function Jogger({...props}) {
  //using the valtio state management with useSnapshot <- useProxy is not unused
  const snap = useSnapshot(state)
  //checking to see which part is being hovered
  const [hovered, setHovered] = useState(null)
  const { nodes, materials } = useGLTF('/jogger.glb')
  return (
    <group {...props} dispose={null} 
    //when curser is hovering, it will display the name
    onPointerOver={(e) => { e.stopPropagation(); setHovered(e.material)}}
    //when curser moves away from the object, displayed name will disappear
    onPointerOut={(e)=>{ e.intersections.length === 0 && setHovered(null)}}
    //when clicked, it will change the valtio state's current value
    onPointerDown={(e)=>{ e.stopPropagation(); state.current = e.object.material.name }}
    //when click is missed, current value is set back to null
    onPointerMissed={(e)=>{ state.current = "blank"}}
    >
      <mesh geometry={nodes.STITCH_COLLAR.geometry} material={materials.nylon} material-color={snap.items.nylon}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.STITCH_EYESTAY.geometry} material={materials.suede_1} material-color={snap.items.suede} position={[0.304, 0.728, -0.089]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.222, 0.227]} />
      <mesh geometry={nodes.STITCH_HEEL_COUNTER.geometry} material={materials.heelPU_1} material-color={snap.items.heelPU}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.249, 0.221, 0.222]} />
      <mesh geometry={nodes.STITCH_MEDIAL_DECO.geometry} material={materials.nylon} material-color={snap.items.nylon}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.STITCH_TOECAP_.geometry} material={materials.suede} material-color={snap.items.toeCap}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.25, 0.222, 0.223]} />
      <mesh geometry={nodes.EVA.geometry} material={materials.eva} material-color={snap.items.eva} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.EVA_COLORED_STRIPE.geometry} material={materials.midsoleSTR} material-color={snap.items.midsoleSTR} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.EVA_FOXING.geometry} material={materials.eva} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TPR.geometry} material={materials.tpr} material-color={snap.items.tpr}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.SOLEPLATE_EVA.geometry} material={materials.eva} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.LOGO_MUSTACHE_DH_.geometry} material={materials.backLogo} material-color={snap.items.backLogo} position={[-2.785, 0.647, -0.173]} rotation={[1.574, -0.453, 1.549]} scale={4.388} />
      <mesh geometry={nodes.LOGO_SIDE_WORDMARK_.geometry} material={materials.sideLogo} material-color={snap.items.sideLogo} position={[-0.413, 0.612, -0.608]} rotation={[-1.705, -0.418, -0.231]} scale={[-11.684, -15.342, -10.815]} />
      <mesh geometry={nodes.EYESTAY.geometry} material={materials.suede_1} material-color={snap.items.suede} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.HEEL_COUNTER.geometry} material={materials.heelPU_1} material-color={snap.items.heelPU} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.INSOLE.geometry} material={materials.insole} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.nylon001.geometry} material={materials.nylon_2} material-color={snap.items.nylon} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.LACES.geometry} material={materials.lace} material-color={snap.items.lace} position={[-0.024, 1.322, 0.056]} rotation={[0.011, -0.083, -0.012]} scale={[0.335, 0.415, 0.415]} />
      <group position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.nylon} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.nylon} />
      </group>
      <mesh geometry={nodes.MUSTACHE.geometry} material={materials.heelPU} material-color={snap.items.heelPU}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <group position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]}>
        <mesh geometry={nodes.Cube016_1.geometry} material={materials['nylon_2.001']} material-color={snap.items.nylon} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials.nylon} />
      </group>
      <mesh geometry={nodes.SIDEWALL_OVERLAY.geometry} material={materials.sidePU_1} material-color={snap.items.sidePU}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.SIDEWALL_UNDERLAY.geometry} material={materials.sidePU} material-color={snap.items.sidePU}  position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TOE_CAP.geometry} material={materials.toeCap} material-color={snap.items.toeCap} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TONGUE.geometry} material={materials.nylon_tongue} material-color={snap.items.nylon} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TONGUE_BINDING.geometry} material={materials.nylon} material-color={snap.items.nylon} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
      <mesh geometry={nodes.TONGUE_LABEL.geometry} material={materials.label} material-color={snap.items.label} position={[-0.05, -0.68, 0.031]} rotation={[0.013, 0.035, -0.012]} scale={[0.248, 0.221, 0.221]} />
    </group>
  )
}


const Picker =() =>{
  const snap = useSnapshot(state)
  let material = snap.current.split("_")[0]
  return(
    <div style={{display: material ? "block":"none"}}>
      <HexColorPicker className='picker' 
      color={snap.items[material]}
      onChange={(color)=> (state.items[material] = color)} />
      <h1>{material}</h1>
    </div>
  )
}


const Tester = () => {
  const snap = useSnapshot(state)
  // const [suede, setSuede ]  = useState("#ffffff")
  // const [heelPU, setHeelPU ]  = useState("#ffffff")
  // const [toeCap, setToeCap] = useState("#ffffff")
  // const [sidePU, setSidePU] = useState("#ffffff")
  // const [nylon, setNylon] = useState("#ffffff")
  // const [eva, setEva] = useState("#ffffff")
  // const [lace, setLace] = useState("#ffffff")
  // const [tpr, setTpr] = useState("green")
  // const [midsoleSTR, setMidsoleSTP] = useState("#ffffff")
  // const [label, setLabel] = useState("#ffffff")
  // const [sideLogo, setSideLogo] = useState("green")
  // const [backLogo, setBackLogo] = useState("green")

    return (
    <div className='app_container'>
      <div className='shoe_container'>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight>
            <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
            <Jogger />
        {/* <Jogger customeColor ={{ suede:suede, heelPU:heelPU, toeCap:toeCap, sidePU:sidePU, lace:lace, 
          eva:eva, tpr:tpr, nylon:nylon, midsoleSTR:midsoleSTR, label:label, sideLogo:sideLogo, backLogo:backLogo}} /> */}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        <Environment preset='city'/>
          </ambientLight>
        </Suspense>
      </Canvas>
      <Picker />
      </div>
      <div className='color_picker'>
      <h2>Color Picker</h2>
      {/* <div className='input_container'>
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
      </div> */}
      </div>
    </div>
    );
};

export default Tester;