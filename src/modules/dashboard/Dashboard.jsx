import React from "react";
import SectionContainer from "../shared/components/SectionContainer";
import SectionNameDelimitation from "../shared/components/SectionNameDelimitation";
import Chart from "../shared/components/Chart";
import { pn1, pn2, pn3, pn4 } from "./utils/salesData";

export default function Dashboard() {
  return (
    <section className="flex flex-col w-full h-full gap-12">
      <SectionContainer>
        <SectionNameDelimitation sectionName="Charts" />
        <div className="grid w-full grid-cols-2 gap-8">
          <Chart data={pn1} title="Part Number example data 1" />
          <Chart data={pn2} title="Part Number example data 2" />
          <Chart data={pn3} title="Part Number example data 3" />
          <Chart data={pn4} title="Part Number example data 4" />
        </div>
      </SectionContainer>
    </section>
  );
}
