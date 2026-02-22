import { ReactNode, useId } from 'react';
import InfoIcon from '@/components/icons/InfoIcon';
import WarningIcon from '@/components/icons/WarningIcon';
import { Tooltip as ReactTooltip } from 'react-tooltip';

type TooltipIconTypes = 'info' | 'warning';

type TooltipProps = {
  type: TooltipIconTypes;
  content: string | ReactNode;
}

const icon: Record<TooltipIconTypes, ReactNode> = {
  info: <InfoIcon className="w-6 h-6 text-gray-500" />,
  warning: <WarningIcon className='w-6 h-6 text-yellow-500' />
};

const Tooltip = ({ type, content }: TooltipProps) => {
  const id = useId();

  return <>
    <div
      data-tooltip-id={id}
    >
      {icon[type]}
    </div>
    <ReactTooltip id={id} className='bg-red-500 text-xs'>
      {content}
    </ReactTooltip>
  </>;
};

export default Tooltip;