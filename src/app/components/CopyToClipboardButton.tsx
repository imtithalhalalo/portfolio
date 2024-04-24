import { useState } from 'react';
import copy from 'clipboard-copy';
import Image from 'next/image';

interface ICopyToClipboardButton {
    text: string;
}

const CopyToClipboardButton = ({ text }: ICopyToClipboardButton) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            await copy(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); 
        } catch (error) {
            console.error('Failed to copy text to clipboard', error);
        }
    };

    return (
        <div>
            <button onClick={handleCopyClick}>
                {isCopied ? (
                    <Image src={'/images/clipboard-check.png'} alt="Checkmark Icon" width={20} height={20} />
                ) : (
                    <Image src={'/images/clipboard.png'} alt="Clipboard Icon" width={20} height={20} />
                )}
            </button>
        </div>
    );
};

export default CopyToClipboardButton;
