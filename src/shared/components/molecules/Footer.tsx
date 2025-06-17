import Typography from "../atoms/Typography";

function Footer() {
  return (
    <div className="w-full h-[160px] flex flex-col justify-center bg-gray-50 mt-[100px] ">
      <div className="w-[1150px] px-6  m-auto">
        <Typography.SubTitle1>IT{"'"}s Okay to Lose</Typography.SubTitle1>
        <div className="border-b-[1px] border-black/30 my-4" />
        <div className="flex justify-between items-center">
          <a href="https://github.com/IT-s-Okay-to-Lose">
            <i className="bi bi-github text-2xl" />
          </a>
          <Typography.Caption>
            © IT’s Okay to Lose Inc. All rights reserved{" "}
          </Typography.Caption>
        </div>
      </div>
    </div>
  );
}

export default Footer;
