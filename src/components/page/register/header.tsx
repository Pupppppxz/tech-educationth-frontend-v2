type RegisterHeaderProps = {
    stepName: string;
    title: string;
};

function RegisterHeader({ stepName, title }: RegisterHeaderProps) {
    return (
        <div className="w-full">
            <p className="font-semibold text-sm">{stepName}</p>
            <p className="font-bold text-xl md:text-2xl">{title}</p>
            <div className="h-[1px] w-full mt-4 bg-main-dark-blue" />
        </div>
    );
}

export default RegisterHeader;
