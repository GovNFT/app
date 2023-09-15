import Govnft from "./Govnft";

export default function Govnfts() {
  return (
    <div className="space-y-2.5">
      <div className="pb-2 text-sm">Available for witdrawals</div>
      <Govnft withdraw={true} />
      <Govnft withdraw={true} />

      <div className="pb-2 pt-12 text-sm">Vesting</div>
      <Govnft withdraw={false} />
      <Govnft withdraw={false} />
      <Govnft withdraw={false} />
      <Govnft withdraw={false} />
      <Govnft withdraw={false} />
    </div>
  );
}
