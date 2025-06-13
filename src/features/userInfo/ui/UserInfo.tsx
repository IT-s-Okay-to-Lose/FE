import Typography from "@/shared/components/atoms/Typography";
import Card from "@/shared/components/atoms/Card";

function UserInfo() {
  return (
    <Card>
      <div className="flex">
        <div className="flex-shrink-0 w-[90px] h-[90px] rounded-full bg-otl-gray mr-6"></div>
        <div className="grow flex justify-between items-center">
          <Card.Content>
            <Typography.Head2>강민재</Typography.Head2>
            <Typography.SubTitle2 className="text-otl-gray">
              가입일 2020년 5월 30일
            </Typography.SubTitle2>
          </Card.Content>
          <Card.Content>
            <Typography.SubTitle1 className="text-otl-stock-up flex justify-end">
              +120.8%
            </Typography.SubTitle1>
            <Typography.Head1>250,234,750원</Typography.Head1>
          </Card.Content>
        </div>
      </div>
    </Card>
  );
}

export default UserInfo;
