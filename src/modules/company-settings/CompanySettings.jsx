import SectionContainer from "../shared/components/SectionContainer";
import SectionNameDelimitation from "../shared/components/SectionNameDelimitation";
import CompanyOptions from "./components/CompanyOptions";

export default function CompanySettings() {
  return (
    <section className="flex flex-col w-full h-full gap-12 ">
      <SectionContainer>
        <SectionNameDelimitation sectionName="Edit Company Information" />
        <CompanyOptions />
      </SectionContainer>
    </section>
  );
}
