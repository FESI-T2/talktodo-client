interface SeparatorType {
  top?: number;
  bottom?: number;
}

export default function SidebarSeparator({ top = 0, bottom = 0 }: SeparatorType) {
  return (
    <div
      className='w-full border-b border-gray-200'
      style={{
        marginTop: top ? `${top * 0.25}rem` : undefined,
        marginBottom: bottom ? `${bottom * 0.25}rem` : undefined,
      }}
    />
  );
}
