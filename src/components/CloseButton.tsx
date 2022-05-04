import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-red-600 focus:text-red-600"
      title="Fechar formulário"
    >
      <X weight="bold" className="x-4 h-4" />
    </Popover.Button>
  );
}
