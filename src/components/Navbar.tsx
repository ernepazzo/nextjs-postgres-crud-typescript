import Image from "next/image";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <Menu inverted attached style={{ padding: "1.5rem" }}>
      <Container>
        <Menu.Item onClick={() => router.push("/")}>
          <Image src="/logo.png" width={30} height={30} alt="logo" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            {/* <Button onClick={() => router.push("/tasks/new")}>New Task</Button> */}
            <Button animated onClick={() => router.push("/tasks/new")}>
              <Button.Content visible>New Task</Button.Content>
              <Button.Content hidden>
                <Icon name="tasks" />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
