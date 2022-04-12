import className from 'classnames';

type IVerticalFeatureRowProps = {
  title: string;
  description?: string;
  customDescription?: React.ReactNode;
  imageComponent: React.ReactNode;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        {props.description && (
          <div className="mt-6 text-xl leading-9">{props.description}</div>
        )}
        {props.customDescription && (
          <div className="mt-6 text-xl leading-9">
            {props.customDescription}
          </div>
        )}
      </div>

      <div className="w-full sm:w-1/2 p-6 text-primary-500">
        {props.imageComponent}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
