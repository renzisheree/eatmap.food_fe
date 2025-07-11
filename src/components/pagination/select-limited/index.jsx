// import { listOptionEntriesPage } from "features/sales-portal/helper";
import DropDown from "@/components/dropdown-fieldset";
import {
  EntriesPage,
  WrapperSelectLimited
} from "./styled";
import Icons from "@/components/icons";

function SelectLimited({ onChange, value }) {
  return (
    <WrapperSelectLimited>
      <DropDown
        type="select"
        list={[6, 12, 24, 48].map((a) => ({ value: a + "", label: a }))}
        iconSuffix={<Icons icon="dropdown" />}
        onChange={(e) => {
          onChange(e);
        }}
        size="sm"
        value={value + ""}
        style={{ width: 100, maxWidth: "120px" }}
      />

      <EntriesPage> items mỗi trang</EntriesPage>
    </WrapperSelectLimited>
  );
}

export default SelectLimited;
