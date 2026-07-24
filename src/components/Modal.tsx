import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
  contentClass?: string
}

export default function Modal({
  visible = false,
  onClose,
  children,
  contentClass = '',
}: ModalProps) {
  return (
    <>
      {visible && (
        <div
          onClick={onClose}
          className='fixed top-0 right-0 bottom-0 left-0 z-40 flex items-center justify-center backdrop-blur-sm'
        >
          <button
            onClick={onClose}
            className='absolute top-5 right-5 z-50 bg-(--bg)'
            aria-label='Fermer la fenêtre modale'
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div
            onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
            className={`flex max-h-[75dvh] max-w-[80dvw] flex-col items-center justify-center gap-5 overflow-hidden rounded-xl border-2 border-(--primary) bg-(--bg) shadow-(--shadow) transition-[opacity,scale] starting:scale-50 starting:opacity-50 ${contentClass}`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}
