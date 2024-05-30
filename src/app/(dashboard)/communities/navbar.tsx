import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC<{
  action?: React.ReactNode;
}> = ({ action }) => {
  return (
    <div className="w-full absolute top-0 left-0 h-14 flex justify-between items-center px-4 bg-[#063773]">
      <Image alt="" src="/check24logo.png" width={100} height={50} />
      {action}
    </div>
  );
};

export const Footer: React.FC<{}> = ({}) => {
  return (
    <div className="w-full h-20 absolute bottom-0 left-0 flex justify-around bg-white shadow-md">
      <Link href={"/"}>
        <Button
          className="h-14 w-14 flex flex-col items-center  hover:bg-white"
          variant={"ghost"}
          size={"icon"}
        >
          <div className="w-5 h-5 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path
                d="m6 8.4c-.3 0-.6.2-.6.5l-.8 3.1c0 .2.1.4.3.5h3.6l-1.1 4.8c-.5 2.3.1 5.4 4.2 5.4h5.2c.3 0 .5-.2.6-.5l.6-2.7c0-.2-.1-.4-.3-.5h-4.9c-1.1 0-1.2-.9-1-1.7l1.2-4.8h6.1c.3 0 .5-.2.6-.5l.7-3.2c0-.2-.1-.4-.4-.4zm3.8-3.8c0 1.4 1.1 2.5 2.6 2.5 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5c-1.4-.1-2.5 1-2.6 2.4z"
                fill="#3a3a3a"
              />
            </svg>
          </div>
          <div className="text-xs text-slate-400">Home</div>
        </Button>
      </Link>

     {/* <Button
        className="h-14 w-20 flex flex-col items-center hover:bg-white"
        variant={"ghost"}
        size={"icon"}
      >
        <div className="w-5 h-5 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <g fill="#9d9d9d">
              <path d="m6.25 14.25a4.23 4.23 0 0 0 -2.36.75 4.22 4.22 0 0 0 -1.81 4.36 4.38 4.38 0 0 0 1.16 2.18 4.38 4.38 0 0 0 2.18 1.16 4.22 4.22 0 0 0 4.36-1.81 4.23 4.23 0 0 0 .72-2.36 4.34 4.34 0 0 0 -.32-1.63 4.57 4.57 0 0 0 -.92-1.38 4.57 4.57 0 0 0 -1.38-.92 4.34 4.34 0 0 0 -1.63-.35zm-2 2.35a1.36 1.36 0 0 0 .1.36 2.12 2.12 0 0 1 .14.75 1.42 1.42 0 0 1 -.33.81 2.9 2.9 0 0 0 -.46 1.05 2.7 2.7 0 0 1 .55-3zm.54 4.23a1.71 1.71 0 0 1 .21-1.76 2.39 2.39 0 0 0 .49-1.31 3 3 0 0 0 -.18-1.1c-.1-.32-.16-.51-.06-.72a2.73 2.73 0 0 1 2 0 1.75 1.75 0 0 0 -.85 1 2.43 2.43 0 0 0 .6 2.44c.46.63.69 1 .08 1.73a2.75 2.75 0 0 1 -.81.14 2.7 2.7 0 0 1 -1.46-.42zm3.61-.66a2.75 2.75 0 0 0 -.64-1.38c-.42-.57-.64-.92-.44-1.53a.77.77 0 0 1 .22-.34.85.85 0 0 1 .37-.18.67.67 0 0 1 .46.05 2.72 2.72 0 0 1 0 3.38z" />
              <path d="m10.29 17.25a.39.39 0 0 0 .07.27v-.12z" />
              <path d="m8.63 11.88 1.91-1.29 2.24 1 .32.92.05-.06a11.2 11.2 0 0 1 4.5-2.63l-1.51-1-.4-3.56.37-.49a7.59 7.59 0 0 1 2.81 4.75 10.53 10.53 0 0 1 1.48-.2 8.75 8.75 0 0 0 -17.4 1.18 8.7 8.7 0 0 0 1.15 4.32 4.29 4.29 0 0 1 1.47-.51 7.36 7.36 0 0 1 -1.09-3.62l1-.27 2.1 1.63.2 2.5a4.31 4.31 0 0 1 1.17.77l-.14-.32zm5.93-6.35.44 3.35-2 1.53-2.15-.92-.65-2.23 2.25-2.41zm-9.4 3.79-.61.22a7.71 7.71 0 0 1 1.13-3l.26.46zm1.76-2.9-.48-.82a7.24 7.24 0 0 1 5.26-2.33l.06.79-2.28 2.36z" />
              <path d="m22.94 9.89-.06-.05-.05-.06a4.19 4.19 0 0 0 -2.35-.52 11.64 11.64 0 0 0 -7.82 3.18l-.05.06-.06.06c-3.35 3.51-3.55 8.83-2.55 10.2l.11.11a4.19 4.19 0 0 0 2.35.52 11.56 11.56 0 0 0 7.82-3.19v-.06l.06-.06c3.44-3.5 3.66-8.82 2.6-10.19zm-2.46.87a4.37 4.37 0 0 1 1.34.17 6.38 6.38 0 0 1 .09 2.68 32.68 32.68 0 0 0 -2.78-2.74 10.24 10.24 0 0 1 1.35-.11zm-8 11.13a4.26 4.26 0 0 1 -1.33-.17 6.09 6.09 0 0 1 -.07-2.72 32.39 32.39 0 0 0 2.83 2.79 9.55 9.55 0 0 1 -1.41.1zm6.84-2.83v.05a9.75 9.75 0 0 1 -4.16 2.35 29 29 0 0 1 -3.77-3.75 9.67 9.67 0 0 1 2.3-4.15l.05-.05a9.75 9.75 0 0 1 4.17-2.36 30.64 30.64 0 0 1 3.77 3.7 9.64 9.64 0 0 1 -2.34 4.21z" />
              <path d="m16.22 12.64a1.39 1.39 0 0 0 .15.75 7.4 7.4 0 0 0 -.72.53 1.51 1.51 0 0 0 -.62-.2 1.48 1.48 0 0 0 .14.62l-.37.34-.31.36a1.62 1.62 0 0 0 -.72-.17 1.39 1.39 0 0 0 .28.7 7.57 7.57 0 0 0 -.52.74 1.4 1.4 0 0 0 -.81-.12 1.46 1.46 0 0 0 .46.77 6.54 6.54 0 0 0 -.49 1.27c.34-.31.65-.63 1-.95a1.5 1.5 0 0 0 .81.11 1.36 1.36 0 0 0 -.31-.61l.61-.63a1.53 1.53 0 0 0 .6.12 1.37 1.37 0 0 0 -.18-.56l.33-.33.3-.31a1.52 1.52 0 0 0 .65.22 1.31 1.31 0 0 0 -.18-.7l.58-.59a1.53 1.53 0 0 0 .68.29 1.36 1.36 0 0 0 -.18-.79l1-1a6.5 6.5 0 0 0 -1.4.5 1.52 1.52 0 0 0 -.78-.36z" />
            </g>
          </svg>
        </div>
        <div className="text-xs text-slate-400">Bets</div>
      </Button>*/}

      <Link href={"/communities"}>
        <Button
          className="h-14 w-20 flex flex-col items-cente hover:bg-white"
          variant={"ghost"}
          size={"icon"}
        >
          <div className="w-5 h-5 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 0 25 25"
              width="25"
            >
              <g fill="#9d9d9d">
                <path d="m4.5 6h16a.94.94 0 0 1 1 1v.5h-18v-.5a.94.94 0 0 1 1-1z" />
                <path d="m6 3.5h13a.94.94 0 0 1 1 1v.5h-15v-.5a.94.94 0 0 1 1-1z" />
                <path d="m22 8.5h-19a.94.94 0 0 0 -1 1v11a.94.94 0 0 0 1 1h19a.94.94 0 0 0 1-1v-11a.94.94 0 0 0 -1-1zm-5 6h-9v-1h9z" />
              </g>
            </svg>{" "}
          </div>
          <div className="text-xs text-slate-400">Communities</div>
        </Button>
      </Link>
      <Link href={"/matches"}>
        <Button
          className="h-14 w-20 flex flex-col items-cente hover:bg-white"
          variant={"ghost"}
          size={"icon"}
        >
          <div className="w-5 h-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 5.25H3.5c-.9665 0-1.75.7835-1.75 1.74999V19.9583c0 .8974.72754 1.625 1.625 1.625H7c.9665 0 1.75-.7835 1.75-1.75V6.99999C8.75 6.0335 7.9665 5.25 7 5.25zm0 18.0833c1.02674 0 1.95022-.4421 2.59045-1.1464.61855.7029 1.52475 1.1464 2.53455 1.1464h3.625c1.0267 0 1.9502-.4421 2.5905-1.1464.6185.7029 1.5247 1.1464 2.5345 1.1464H24.5c1.933 0 3.5-1.567 3.5-3.5V6.99999C28 5.067 26.433 3.5 24.5 3.5H21c-1.0454 0-1.9837.45828-2.625 1.1849C17.7337 3.95828 16.7954 3.5 15.75 3.5h-3.5c-1.0454 0-1.9837.45828-2.625 1.1849C8.98367 3.95828 8.04536 3.5 7 3.5H3.5C1.567 3.5 0 5.067 0 6.99999V19.9583c0 1.8639 1.51104 3.375 3.375 3.375H7zM21 5.25c-.9665 0-1.75.7835-1.75 1.74999V19.9583c0 .8974.7275 1.625 1.625 1.625H24.5c.9665 0 1.75-.7835 1.75-1.75V6.99999c0-.96649-.7835-1.74999-1.75-1.74999H21zm-3.5 1.74999c0-.96649-.7835-1.74999-1.75-1.74999h-3.5c-.9665 0-1.75.7835-1.75 1.74999V19.9583c0 .8974.7275 1.625 1.625 1.625h3.625c.9665 0 1.75-.7835 1.75-1.75V6.99999zM2.625 11.375c0-.4832.39175-.875.875-.875H7c.30326 0 .58489.157.74432.415.15943.258.17392.5801.0383.8513l-2.33333 4.6666c-.21612.4322-.7417.6074-1.17394.3913-.43223-.2161-.60742-.7417-.39131-1.1739L5.58422 12.25H4.375v.2917c0 .4832-.39175.875-.875.875s-.875-.3918-.875-.875V11.375zm8.75 0c0-.4832.3918-.875.875-.875h3.5c.3033 0 .5849.157.7443.415s.1739.5801.0383.8513l-2.3333 4.6666c-.2161.4322-.7417.6074-1.1739.3913-.4323-.2161-.6075-.7417-.3914-1.1739l1.7002-3.4003H13.125v.2917c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875V11.375zm8.75 0c0-.4832.3918-.875.875-.875h3.5c.3033 0 .5849.157.7443.415s.1739.5801.0383.8513l-2.3333 4.6666c-.2161.4322-.7417.6074-1.1739.3913-.4323-.2161-.6075-.7417-.3914-1.1739l1.7002-3.4003H21.875v.2917c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875V11.375zM3.20833 7.58332c0-.48325.39175-.875.875-.875h2.33334c.48325 0 .875.39175.875.875s-.39175.875-.875.875H4.08333c-.48325 0-.875-.39175-.875-.875zm.875 10.79158c-.48325 0-.875.3918-.875.875 0 .4833.39175.875.875.875h2.33334c.48325 0 .875-.3917.875-.875 0-.4832-.39175-.875-.875-.875H4.08333zm16.62497.875c0-.4832.3918-.875.875-.875h2.3334c.4832 0 .875.3918.875.875 0 .4833-.3918.875-.875.875h-2.3334c-.4832 0-.875-.3917-.875-.875zm.875-12.54158c-.4832 0-.875.39175-.875.875s.3918.875.875.875h2.3334c.4832 0 .875-.39175.875-.875s-.3918-.875-.875-.875h-2.3334zm-9.625 12.54158c0-.4832.3918-.875.875-.875h2.3334c.4832 0 .875.3918.875.875 0 .4833-.3918.875-.875.875h-2.3334c-.4832 0-.875-.3917-.875-.875zm.875-12.54158c-.4832 0-.875.39175-.875.875s.3918.875.875.875h2.3334c.4832 0 .875-.39175.875-.875s-.3918-.875-.875-.875h-2.3334z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
          <div className="text-xs text-slate-400">Matches</div>
        </Button>
      </Link>
    </div>
  );
};
