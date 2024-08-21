import CommonForm from "../common-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

function CommonDialog({
  showDialog,
  handleOpenChange,
  title,
  formControls,
  formData,
  handleSubmit,
  btnText,
}) {
  return (
    <Dialog open={showDialog} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-screen h-[450px] overflow-auto">
        <DialogTitle>{title}</DialogTitle>
        <div>
          <CommonForm
            formControls={formControls}
            form={formData}
            handleSubmit={handleSubmit}
            buttonText={btnText}
          />
        </div>
        <DialogDescription />
      </DialogContent>
    </Dialog>
  );
}

export default CommonDialog;
