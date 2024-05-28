'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LSCMD } from "./components/ls";
import { Top } from "./components/top";
import { HELP } from "./components/help";
import {History } from "./components/history";
import { Skills } from "./components/skills";
import { Interest } from "./components/interest";
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
      let ans = `guest@kamesh_portfolio/:> ${output}`;
      let newContents = [...contents, <div key={contents.length}>{ans}</div>];
      
      switch (output.toLowerCase()) {
        case "ls":
          newContents.push(<div key={newContents.length}><LSCMD /></div>);
          break;
          case "skills":
            newContents.push(<div key={newContents.length}><Skills /></div>);
            break;
            case "interest":
              newContents.push(<div key={newContents.length}><Interest /></div>);
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
      <div className="flex">
        <p>guest@kamesh_portfolio/:{'>'} </p>
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
