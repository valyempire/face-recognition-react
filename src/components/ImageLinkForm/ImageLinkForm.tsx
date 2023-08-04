/**
 * Imports styled
 */
import { Paragraph, Container, Button, Input } from "./ImageLinkForm.styles";

/**
 * Imports types
 */
import { ImageLinkFormProps } from "./ImageLinkForm.types";

/**
 * Displays the component
 */
export const ImageLinkForm: React.FC<ImageLinkFormProps> = (props) => {
  const { onInputChange, onButtonSubmit } = props;
  return (
    <div>
      <Paragraph className="f3 white text">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </Paragraph>
      <div className="center">
        <Container className="form center pa4 br3 shadow-5">
          <Input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          />
          <Button
            className="w-30  grow f4 link ph3 pv2 dib white bg-blue"
            onClick={onButtonSubmit}
          >
            Detect
          </Button>
        </Container>
      </div>
    </div>
  );
};
