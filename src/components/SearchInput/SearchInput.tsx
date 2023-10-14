import React, { useRef } from "react";
import {
  Button,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface Props {
  onSearch: (searchtext: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "40%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup borderRadius={5} size="md">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          ref={ref}
          type="text"
          placeholder="Games..."
          border="1px solid #949494"
        />
        <InputRightAddon p={0} border="none">
          <Button
            variant="ghost"
            size="md"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
            onClick={(event) => {
              event.preventDefault();
              if (ref.current) onSearch(ref.current.value);
            }}
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
