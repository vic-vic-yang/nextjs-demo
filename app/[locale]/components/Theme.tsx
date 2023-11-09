'use client'
import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";
let matchMedia: any = ""

export default function Theme() { 
  const themeStore = useThemeStore();
  const watchSystemThemeChange = () => {
    // 仅需一次初始化
    if (matchMedia) return
   // Window 的 matchMedia() 方法返回一个新的 MediaQueryList 对象，表示指定的媒体查询 (en-US)字符串解析后的结果。返回的 MediaQueryList 可被用于判定 Document 是否匹配媒体查询，或者监控一个 document 来判定它匹配了或者停止匹配了此媒体查询。
    matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
    matchMedia.onchange = () => {
      changeTheme('system')
    }
}

  const changeTheme = (theme: any) => {
    let themeClassName = ""
    switch (theme) {
        case 'light':
            themeClassName = "light"
            break
        case 'dark':
            themeClassName = "dark"
            break
        case 'system':
            themeClassName = matchMedia.matches ? "dark" : "light"
            break
    }
    // 修改 html中class
    const html = document.querySelector("html")
    useThemeStore.setState({type:themeClassName})
    if (html) {
      html.className = themeClassName
    }
  }
 
  useEffect(() => { 
    // 调用方法监听系统主题变化
    watchSystemThemeChange();
    const html = document.querySelector("html")
    if (html) {
      if (themeStore.type) {
        html.className = themeStore.type
      } else { 
        html.className = matchMedia.matches ? "dark" : "light"
      }
    } 
  },[])

  return <div className="flex gap-7"> <div onClick={()=>changeTheme('light')}>light</div>
  <div onClick={()=>changeTheme('dark')}>dark</div>
  <div onClick={()=>changeTheme('system')}>system</div></div>
}
