"use client";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  isFetching?: boolean;
  isEmpty?: boolean;
  isError?: boolean;
}

export const Card: React.FC<CardProps> = ({
  isFetching = false,
  isEmpty = false,
  isError = false,
  children,
}) => {
  return (
    <div className="rounded-md p-4 flex flex-wrap  gap-5 justify-center w-full">
      {children}

      {isError && (
        <div className="flex items-center justify-center mt-4">
          <div className="text-lg text-red-500">Ada kesalahan</div>
        </div>
      )}

      {isEmpty && !isFetching && !isError ? (
        <div className="flex items-center justify-center mt-4">
          <div className="text-lg text-gray-500">Data tidak ditemukan</div>
        </div>
      ) : null}
    </div>
  );
};

interface CardBodyProps {
  children: ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div className="flex ga">{children}</div>;
};
