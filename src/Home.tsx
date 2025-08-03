import ToggleButton from "./ToggleButton";
import Form from "./Form";

export default function Home() {
  return (
    <div className="text-gray-500">
      <section className="top flex items-center justify-between p-4">
        <p className="text-3xl font-semibold text-orange-600">CVMaker</p>
        <ToggleButton></ToggleButton>
      </section>
      <hr className="border-gray-200" />
      <Form></Form>
    </div>
  );
}
