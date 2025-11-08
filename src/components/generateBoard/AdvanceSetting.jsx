import { useContext, useEffect, useState } from "react";
import { GenerateApiContext } from "../../context";



const AdvanceSetting = () => {
  const [model, setModel] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const {setSelectedData, selectedData} = useContext(GenerateApiContext);
  
  
  function ratioClickOne(){
    setSelectedData({
      ...selectedData,
      height: 1024,
      width: 1024
    })
  }
  function ratioClickTwo(){
    setSelectedData({
      ...selectedData,
      height: 1600,
      width: 1600
    })
  }
  function ratioClickThree(){
    setSelectedData({
      ...selectedData,
      height: 1920,
      width: 1920
    })
  }
  function ratioClickFoure(){
    setSelectedData({
      ...selectedData,
      height: 2400,
      width: 2400
    })
  }

  useEffect(()=>{
    setSelectedData({
      ...selectedData,
      model,
      height,
      width
    })
  },[model, height, width])
  
  return (
    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Advanced Settings</h4>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <!-- Model Selection --> */}
        <div>
          <label
            for="model"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Model
          </label>
          <select
            id="model"
            className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" onChange={(e)=>setModel(e.target.value)}
            
          >
            <option className="bg-zinc-900" value="flux" >
              Flux
            </option>
            <option className="bg-zinc-900" value="turbo">
              Turbo
            </option>
          </select>
        </div>

        {/* <!-- Seed Input : Auto Generated, readonly for user --> */}
        <div>
          <label
            for="seed"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Seed (for reproducible results)
          </label>
          <input
            type="number"
            id="seed"
            disabled="true"
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Random"
            

          />
        </div>

        {/* <!-- Width Input --> */}
        <div>
          <label
            for="width"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Width
          </label>
          <input
            type="number"
            id="width"
            value={selectedData?.width}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            onChange={(e)=>setWidth(e.target.value)}
            
          />
        </div>

        {/* <!-- Height Input --> */}
        <div>
          <label
            for="height"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Height
          </label>
          <input
            type="number"
            id="height"
            value={selectedData?.height}
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            onChange={(e)=>setHeight(e.target.value)}
          />
        </div>

        {/* <!-- Aspect Ratio Presets --> */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Aspect Ratio Presets
          </label>
          <div className="flex flex-wrap gap-2">
            <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors" onClick={ratioClickOne}>
              1:1
            </button>
            <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"  onClick={ratioClickTwo}>
              16:9
            </button>
            <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"  onClick={ratioClickThree}>
              4:3
            </button>
            <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"  onClick={ratioClickFoure}>
              3:2
            </button>
          </div>
        </div>

        {/* <!-- No Logo Toggle --> */}
      </div>
    </div>
  );
};

export default AdvanceSetting;
