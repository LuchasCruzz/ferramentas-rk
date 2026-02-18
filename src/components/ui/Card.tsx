import * as React from 'react';

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const {className = '', ...rest} = props;
  return <div className={`parchment rounded-2xl shadow-parchment ${className}`} {...rest} />;
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  const {className = '', ...rest} = props;
  return <div className={`p-5 pb-3 ${className}`} {...rest} />;
}

export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const {className = '', ...rest} = props;
  return <h2 className={`text-lg font-semibold ${className}`} {...rest} />;
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  const {className = '', ...rest} = props;
  return <div className={`p-5 pt-2 ${className}`} {...rest} />;
}
