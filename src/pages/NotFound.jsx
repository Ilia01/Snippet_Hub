import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { Heading, Text } from "../components/ui/Typography";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-neutral-50 p-4">
      <Heading level={1} className="mb-4 text-4xl font-bold text-neutral-800">
        404 - Page Not Found
      </Heading>
      <Text variant="secondary" className="mb-8 text-lg text-neutral-600">
        The page you are looking for does not exist.
      </Text>
      <Button onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </div>
  );
}
