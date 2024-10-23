import Dropzone from "./components/Dropzone";
import PartNumberList from "../scheduling/components/part-number-list/PartNumberList";
import SectionNameDelimitation from "../shared/components/SectionNameDelimitation";
import SectionContainer from "../shared/components/SectionContainer";

export default function Scheduling() {
  return (
    <section className="flex flex-col w-full h-full gap-12 ">
      <SectionContainer>
        <SectionNameDelimitation sectionName="Input Section" />
        <button className="self-end p-2 text-white rounded-md bg-border">
          Refresh SAP information
        </button>
        <Dropzone />
      </SectionContainer>
      <SectionContainer>
        <SectionNameDelimitation sectionName="PN List Section" />
        <PartNumberList />
      </SectionContainer>
    </section>
  );
}
