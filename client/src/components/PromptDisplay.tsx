import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PromptDisplayProps {
  title: string;
  author: string;
  focus: string;
  content: string;
  badge?: string;
}

export function PromptDisplay({ title, author, focus, content, badge }: PromptDisplayProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              <span className="font-semibold text-foreground">{author}</span> • {focus}
            </CardDescription>
          </div>
          {badge && <Badge>{badge}</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm text-foreground whitespace-pre-wrap break-words font-mono leading-relaxed">
          {content}
        </pre>
      </CardContent>
    </Card>
  );
}
