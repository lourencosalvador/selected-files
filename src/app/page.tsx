'use client'; 

import { useMemo, useState } from "react";

export default function Home() {
  const [vidoeFile, setVidoeFile] = useState<File | null>(null);

  function handleFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget;
    if (!files) return;
    const selectedFile = files[0];
    setVidoeFile(selectedFile);
  }

 const previewURL = useMemo(() => {
 if(!vidoeFile) return null;

 return URL.createObjectURL(vidoeFile);
 }, [vidoeFile]);

  return (
    <div className="bg-zinc-950 w-screen h-screen flex justify-center items-center">
      <div
        className="h-[25rem] relative w-[35rem] aspect-video mx-4 rounded-lg border-dashed 
      border-2 border-violet-600/50 duration-300 hover:border-violet-400/50 p-6 flex overflow-hidden justify-center items-center cursor-pointer"
      >
        <div className="size-auto flex items-center flex-col gap-3">
          {vidoeFile ? (
            <video src={previewURL ?? ''} controls={false}  className="pointer-events-none inset-0 absolute max-w-full" />
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-violet-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>

              <h1 className="text-slate-100 text-[17px] font-semibold">Selecione uma imagem</h1>
            </>
          )}
        </div>

        <input
          type="file"
          id="video"
          accept="video/mp4"
          className="input-file"
          onChange={handleFileSelected}
        />
      </div>
    </div>
  );
}
