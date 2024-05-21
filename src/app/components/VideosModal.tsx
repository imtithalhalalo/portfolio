import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { XMarkIcon } from '@heroicons/react/24/solid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  height: 600,
  p: 4,
  borderRadius: '20px',
  '@media (max-width: 600px)': { 
    width: '80%', 
    height: 'auto', 
    maxWidth: 300, 
    maxHeight: 500, 
  },
};

interface IVideosModal {
    title: string
    videoUrl: string
    description: string
    open: boolean
    setOpen: any
}
const VideosModal = ({ title, description, videoUrl, open, setOpen }: IVideosModal) => {
  const handleClose = () => setOpen(false);

  return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='flex flex-row justify-between'>
                    <div>
                        <Typography id="modal-modal-title"  className=' text-black' variant="h6" component="h2">
                            {title}
                        </Typography>
                    </div>
                    <div>
                        <button onClick={handleClose} className='text-black flex items-center px-3 py-2 rounded hover:text-black'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    </div>
                </div>
                <Typography id="modal-modal-description" className=' text-black' sx={{ mt: 2 }}>
                    {description}
                </Typography>
                <div className="mt-6">
                    <div className='embed-responsive embed-responsive-16by9' style={{ maxWidth: '100%' }}>
                        <iframe
                            width='540'
                            height='315'
                            className='embed-responsive-item'
                            src={videoUrl}
                            allowFullScreen
                            style={{
                                width: '100%',
                                height: '100%',
                                '@media (max-width: 768px)': { 
                                    width: '100vw', 
                                    height: '56.25vw', 
                                } ,
                            } as any}
                        ></iframe>
                    </div>
                </div>
            </Box>
        </Modal>
  );
}

export default VideosModal;