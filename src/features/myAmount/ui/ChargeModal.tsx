import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import UnitInput from "@/shared/components/atoms/UnitInput";

interface ModalProps {
  onClose: () => void;
}

function ChargeModal({ onClose }: ModalProps) {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 모달 바깥쪽 (배경) 클릭 시 닫기
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-5 flex items-center justify-center bg-black/50"
      onClick={handleBackgroundClick}
    >
      <Card className="w-[335px] h-[320px] justify-between bg-white">
        <Card.Header className="flex justify-between items-center">
          <Typography.Head3>돈 채우기</Typography.Head3>
          <button onClick={onClose}>
            <i className="bi bi-x-lg text-xl" />
          </button>
        </Card.Header>
        <Card.Content className="gap-[15px]">
          <UnitInput unit="원" className="grow" />
          <Typography.Caption className="flex justify-end">
            최대 금액 30,000,000원
          </Typography.Caption>
        </Card.Content>
        <Card.Footer>
          <Button.Main className="grow" onClick={onClose}>
            돈 채우기
          </Button.Main>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ChargeModal;
