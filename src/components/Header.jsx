import {useState, useEffect} from 'preact/hooks';

const DarkModeIcon = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="#181616" height="20" width="20" viewBox="0 0 48 48"><path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Z"/></svg>)
};

const LightModeIcon = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="20" width="20" viewBox="0 0 48 48"><path d="M24 34q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425Z"/></svg>)
};

export default function Header() {
  const themeKey = "theme";
  const lightTheme = "light";
  const darkTheme = "dark";

  const initialState = (typeof localStorage !== "undefined" && localStorage.getItem(themeKey)) ? localStorage.getItem(themeKey) : lightTheme;
  
  const [theme, setTheme] = useState(initialState);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  useEffect(() => {
    if(theme === lightTheme) {
      document.documentElement.classList.remove(darkTheme);
    } else {
      document.documentElement.classList.add(darkTheme);
    }
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  return (
    <header class="sticky top-0 z-50 select-none shadow dark:shadow-gray-600 bg-gray-50 dark:bg-dark text-xl transition-all">
      <noscript>
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span class="block sm:inline">Please <span class="font-semibold">enable JavaScript</span>, without it this site is not fully functional.</span>
        </div>
      </noscript>
      {/* <!-- Standard navbar --> */}
      <div class="hidden sm:flex flex-wrap justify-center items-center">
        <a href="/#welcome" class="py-4 px-6 border-white dark:border-dark border-b-2 transition-[border-color] hover:border-black hover:dark:border-white">Home</a>
        <a href="/#about" class="py-4 px-6 border-white dark:border-dark border-b-2 transition-[border-color] hover:border-black hover:dark:border-white">About</a>
        <a href="/#skills" class="py-4 px-6 border-white dark:border-dark border-b-2 transition-[border-color] hover:border-black hover:dark:border-white">Skills</a>
        <a href="/#cv" class="py-4 px-6 border-white dark:border-dark border-b-2 transition-[border-color] hover:border-black hover:dark:border-white">CV</a>

        <div class="cursor-pointer py-[20px] px-6 border-white dark:border-dark border-b-2 transition-[border-color] hover:border-black hover:dark:border-white" onClick={toggleTheme}>
          {theme === lightTheme ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
      </div>

      {/* <!-- Mobile navbar --> */}
      <div class="sm:hidden flex flex-col">
        {/* <!-- Open/Close button --> */}
        <input id="navbar-menu-button" type="checkbox" class="hidden" />
        <label id="navbar-menu-label" for="navbar-menu-button" class="ring-2 ring-gray-200 dark:ring-gray-700 m-4 p-1 w-fit cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-700 rounded transition-[background-color] flex flex-row justify-center items-center">
          {/* <!-- Mobile hamburger button --> */}
          <svg class="w-5 h-5 menu-hamburger" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          
          {/* <!-- Mobile close button --> */}
          <svg class="w-5 h-5 menu-close" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>          
        </label>

        {/* <!-- Mobile menu --> */}
        <ul class="navbar-menu divide-y divide-solid">
          <li class="w-auto text-center"><a href="/#welcome" class="block w-auto py-4 hover:bg-gray-200 hover:dark:bg-gray-700 border-gray-200 border-t-2 transition-[background-color]">Home</a></li>
          <li class="w-auto text-center"><a href="/#about" class="block w-auto py-4 hover:bg-gray-200 hover:dark:bg-gray-700 transition-[background-color]">About me</a></li>
          <li class="w-auto text-center"><a href="/#skills" class="block w-auto py-4 hover:bg-gray-200 hover:dark:bg-gray-700 transition-[background-color]">Skills</a></li>
          <li class="w-auto text-center"><a href="/#cv" class="block w-auto py-4 hover:bg-gray-200 hover:dark:bg-gray-700 transition-[background-color]">CV</a></li>

          <li class="w-auto text-center"><div onClick={toggleTheme} class="cursor-pointer flex w-auto py-4 hover:bg-gray-200 hover:dark:bg-gray-700 border-gray-200 border-b-2 transition-[background-color] justify-center items-center">{theme === lightTheme ? <DarkModeIcon /> : <LightModeIcon />}</div></li>
        </ul>
      </div>
    </header>
  );
};
