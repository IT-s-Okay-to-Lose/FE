import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import UnitInput from "@/shared/components/atoms/UnitInput";
import { FormProvider, useForm } from "react-hook-form";
import { chargeMoney } from "../services/myAmount.service";

interface ModalProps {
  onClose: () => void;
}

function ChargeModal({ onClose }: ModalProps) {
  const methods = useForm<{ amount: number }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleAmountSubmit = async (data: { amount: number }) => {
    if (window.confirm("금액을 충전하시겠습니까?")) {
      try {
        await chargeMoney(data.amount);
        onClose();
      } catch (e) {
        console.error(e);
        alert("충전이 완료되지 않았습니다. 다시 시도해주세요.");
      }
    }
  };

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
      <Card className="justify-between bg-white shadow-none">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(handleAmountSubmit)}
            className="w-[335px] h-[320px] flex flex-col justify-between"
          >
            <Card.Header className="flex justify-between items-center">
              <Typography.Head3>돈 채우기</Typography.Head3>
              <button onClick={onClose}>
                <i className="bi bi-x-lg text-xl" />
              </button>
            </Card.Header>

            <Card.Content className="gap-[15px]">
              <UnitInput
                type="number"
                register={register("amount", {
                  required: "금액을 입력해주세요",
                  max: {
                    value: 30000000,
                    message: "최대 금액은 30,000,000원 입니다.",
                  },
                  min: {
                    value: 1,
                    message: "충전 금액은 1원 이상이어야 합니다.",
                  },
                })}
                unit="원"
                className="grow"
              />
              <div className="flex justify-between px-2">
                <Typography.Caption className="flex justify-end">
                  최대 금액 30,000,000원
                </Typography.Caption>
                {errors.amount?.message && (
                  <Typography.Error>
                    {String(errors.amount.message)}
                  </Typography.Error>
                )}
              </div>
            </Card.Content>
            <Card.Footer>
              <Button.Main className="grow" type="submit">
                돈 채우기
              </Button.Main>
            </Card.Footer>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}

export default ChargeModal;
