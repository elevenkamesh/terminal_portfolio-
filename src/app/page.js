'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { LSCMD } from "./components/ls";
import { Top } from "./components/top";
import { HELP } from "./components/help";
import {History } from "./components/history";
import { Skills } from "./components/skills";
import { Interest } from "./components/interest";
import { Me } from "./components/me";
import { Education } from "./components/education";
import { Social } from "./components/social";
export default function Home() {
  const [output, setOutput] = useState('');
  const [contents, setContents] = useState([]);
  const [command , setcommad] =useState([])
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      let data = command
      data.push(output)
      setcommad(data);
      let ans = `<p className="text-green-700"> Guest@kamesh_portfolio/:> ${output} </p>`;
      let newContents = [...contents, <div key={contents.length}>
        <div className="text-green-900" dangerouslySetInnerHTML={{__html : ans}}/>
        {/* {ans} */}
        </div>];
      
      switch (output.toLowerCase()) {
        case "ls":
          newContents.push(<div key={newContents.length}><HELP /></div>);
          break;
          case "me":
            newContents.push(<div key={newContents.length}><Me /></div>);
            break;
            case "edu":
              newContents.push(<div key={newContents.length}><Education /></div>);
              break;
          case "skills":
            newContents.push(<div key={newContents.length}><Skills /></div>);
            break;
            case "socials":
              newContents.push(<div key={newContents.length}><Social /></div>);
              break;
            case "interest":
              newContents.push(<div key={newContents.length}><Interest /></div>);
              break;
              case "banner":
                newContents.push(<div key={newContents.length}><Top /></div>);

                break;
          case "help":
            newContents.push(<div key={newContents.length}><HELP /></div>);
            break;
            case "clear":
              newContents=[];
              break;
              case "history":
                newContents.push(<div key={newContents.length}><History data={command} /></div>);
                break;
          default:
          newContents.push(
            <div key={newContents.length}>
              unknown command please enter 'help' for help
            </div>
          );
          break;
      }

      setContents(newContents);
      setOutput('');
    }
  };

  return (
    <div className="h-full w-full" onClick={() => inputRef.current.focus()}>
      <Top/>
      <div>
        {contents.map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>
      <div className="flex text-green-900">
        <p >Guest</p><p>@kamesh_portfolio/:{'>'} </p>
        <input
        
          className="w-full  p-0 m-0"
          ref={inputRef}
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
        />
      </div>
    </div>
  );
}
