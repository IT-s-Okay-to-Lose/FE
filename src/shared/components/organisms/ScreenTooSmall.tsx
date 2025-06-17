import Typography from "../atoms/Typography";


function ScreenTooSmall() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center select-none">
      <i className="bi bi-exclamation-triangle text-5xl text-otl-point mb-4" />
      <Typography.Head2 className="mb-2">
        더 큰 화면에서 이용해주세요
      </Typography.Head2>
      <Typography.Caption className="text-sm text-otl-gray">
        이 페이지는 태블릿 또는 데스크탑 환경에 최적화되어 있습니다.
      </Typography.Caption>
    </div>
  );
}

export default ScreenTooSmall;
