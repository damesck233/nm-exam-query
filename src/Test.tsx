import {useDisclosure} from '@mantine/hooks';
import {Button, Modal} from '@mantine/core';

export default function Demo() {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Authentication">
                {/* Modal content */}
                <h1>114514</h1>
            </Modal>

            <Button ariant="filled" onClick={open}>
                Open modal
            </Button>
        </>
    );
}