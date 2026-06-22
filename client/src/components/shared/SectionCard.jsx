function SectionCard({
  title,description,children
}){
  return (
    <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm shadow-slate-100/50 mt-6 w-full">
      <div className="mb-4">
        <h2 className="text-lg font-extrabold text-slate-850 tracking-tight">{title}</h2>

        {description &&(
          <p className="text-xs text-slate-450 mt-1 leading-relaxed">
            {description}
          </p>
        ) }
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}

export default SectionCard;