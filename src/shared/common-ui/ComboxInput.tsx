import { useState } from 'react';
import { Box, Button, Combobox, Flex, useCombobox } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate', '🍎 Asaxasxpples', '🍌 sxasx', '🥦 Brocsaxasxcoli', '🥕 Carrosaxts', '🍫 Chocosaxlate',];

function ComboxInput() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });
  console.log(combobox);


  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item, index) => (
      <Combobox.Option value={item} key={item} onMouseOver={() => combobox.selectOption(index)}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Box  onClick={() => combobox.toggleDropdown()} >
            <span>All Categories</span>
            <span>{combobox.dropdownOpened === true ? < IconChevronDown size={16} /> : <IconChevronUp size={16} />}</span>
    
          </Box>
        </Combobox.Target>
        <Combobox.Dropdown p={5} onMouseLeave={() => combobox.resetSelectedOption()}>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="All Search groceries"
          />
          <Combobox.Options mah={200} style={{ overflowY: 'auto' }} >
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default ComboxInput