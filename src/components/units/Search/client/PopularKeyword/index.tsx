const RECENT: string[] = [
    'example1',
    'example2',
    'example3',
    'example4',
    'example5',
    'example6',
    'example7'
];

function PopularKeyword() {
    return (
        <div className="flex flex-col gap-[16px]">
            {RECENT.map((item, i) => (
                <div key={i} className="flex gap-[6px]">
                    <p className="text-red-500 text-sm font-bold">{i + 1}</p>
                    <p className="text-neutral-800 text-sm font-normal">{item}</p>
                </div>
            ))}
        </div>
    );
}

export default PopularKeyword;