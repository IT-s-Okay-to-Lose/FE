import Typography from "../atoms/Typography";

function Footer() {
  return (
    <div className="w-full h-[120px] flex flex-col justify-center bg-gray-50 mt-[50px] px-[160px]">
      <div className="max-w-[850px] laptop:max-w-[1150px] m-auto">
        <Typography.SubTitle1>IT{"'"}s Okay to Lose</Typography.SubTitle1>
        <div className="border border-black/30 my-4" />
        <div className="flex justify-between items-center">
          <i className="bi bi-github text-2xl" />
          <Typography.Caption>
            © IT’s Okay to Lose Inc. All rights reserved{" "}
          </Typography.Caption>
        </div>
      </div>
    </div>
  );
}

export default Footer;
