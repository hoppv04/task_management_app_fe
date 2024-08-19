import { SelectItem } from "@radix-ui/react-select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectTrigger } from "../ui/select";
import CommonButton from "../common-button";

function CommonForm({ formControls = [], handleSubmit, form, buttonText }) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {formControls.length > 0
          ? formControls.map((controlItem, index) => (
              <FormField
                key={index}
                control={form.control}
                name={controlItem.id}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{controlItem.label}</FormLabel>
                      {controlItem.componentType === "input" ? (
                        <FormControl>
                          <Input
                            placeholder={controlItem.placeholder}
                            type={controlItem.type}
                            {...field}
                            autoComplete={controlItem.autoComplete || "off"}
                            className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </FormControl>
                      ) : controlItem.componentType === "select" ? (
                        <Select>
                          <FormControl>
                            <SelectTrigger className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                              Select
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {controlItem.options.map((optionItem, index) => (
                              <SelectItem
                                key={index}
                                className="text-black cursor-pointer focus:text-black"
                              >
                                {optionItem.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : null}
                    </FormItem>
                  );
                }}
              />
            ))
          : null}
        <div className="flex justify-center items-center mt-4">
          <CommonButton buttonText={buttonText} />
        </div>
      </form>
    </Form>
  );
}

export default CommonForm;
