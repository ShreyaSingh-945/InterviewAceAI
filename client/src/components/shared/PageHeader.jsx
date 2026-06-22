function PageHeader({title,subtitle}){
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h1>

      {subtitle && (
        <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
export default PageHeader;