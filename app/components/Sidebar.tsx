"use client";
import React from 'react'

export default function Sidebar() { 
  return (
<div className="bg-gray-900 flex flex-col">
  <div className="flex flex-row items-center p-2 gap-3 w-52 h-10 rounded-md"> Home </div>
  <div className="flex flex-row items-center p-2 gap-3 w-52 h-10 rounded-md"> About me</div>
  <div className="flex flex-row items-center p-2 gap-3 w-52 h-10 rounded-md"> Tech Stack</div>
  <div className="flex flex-row items-center p-2 gap-3 w-52 h-10 rounded-md"> Projects</div>
  <div className="flex flex-row items-center p-2 gap-3 w-52 h-10 rounded-md"> Contact</div>
</div> )
}
