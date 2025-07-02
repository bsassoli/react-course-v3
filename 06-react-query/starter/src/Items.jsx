import SingleItem from "./SingleItem";
import { useFetchTasks } from "./hooks";

const Items = () => {
  const { data, isLoading, isError, error } = useFetchTasks();
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading ...</p>
  }
  if (isError) {
    console.log(error.response.data);
    return <p style={{ marginTop: "1rem" }}>Error ...</p>
  }
  
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
