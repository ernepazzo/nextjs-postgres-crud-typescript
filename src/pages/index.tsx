import { useRouter } from "next/router";
import { Button, Grid } from "semantic-ui-react";
import Layout from "src/components/Layout";
import TaskList from "src/components/tasks/TaskList";
import { Task } from "src/interfaces/Task";

interface Props {
  tasks: Task[];
}

export default function IndexPage({ tasks }: Props) {
  const router = useRouter();

  return (
    <Layout>
      {tasks.length === 0 ? (
        <Grid
          columns={3}
          centered
          verticalAlign="middle"
          style={{ heigth: "70%" }}
        >
          <Grid.Row>
            <Grid.Column>
              <h1>No tasks yet</h1>
              <Button primary onClick={() => router.push("/tasks/new")}>
                Create one
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : (
        <TaskList tasks={tasks}/>
      )}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};
