import SectionContainer from "../../shared/components/SectionContainer";
import SectionNameDelimitation from "../../shared/components/SectionNameDelimitation";
import InformationTable from "../../shared/components/information-tables/InformationTable";
import InformationTableForm from "../../shared/components/information-tables/InformationTableForm";
import InformationTableModal from "../../shared/components/information-tables/InformationTableModal";
import PartNumberService from "./services/PartNumberService";
import { HEADERS, FORM_FIELDS } from "./config";
import { useDataTable } from "../../shared/hooks/useDataTable";

export default function PartNumbers() {
  const {
    isModalOpen,
    loading,
    error,
    selectedItem,
    isEditing,
    data: lines,
    handleAdd,
    handleEdit,
    handleDelete,
    handleRowClick,
    handleAddClick,
    handleModalClose,
  } = useDataTable(PartNumberService);

  return (
    <section className="flex flex-col w-full h-full gap-12">
      <SectionContainer>
        <SectionNameDelimitation sectionName="Part Numbers Management" />
        <div className="w-full mt-6">
          <InformationTable
            name="Part Numbers"
            headers={HEADERS}
            data={lines}
            onAddClick={handleAddClick}
            onRowClick={handleRowClick}
            onDeleteClick={handleDelete}
          />

          <InformationTableModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
          >
            <InformationTableForm
              fields={FORM_FIELDS}
              onSubmit={isEditing ? handleEdit : handleAdd}
              initialData={selectedItem}
              onClose={handleModalClose}
            />
          </InformationTableModal>
        </div>
      </SectionContainer>
    </section>
  );
}
