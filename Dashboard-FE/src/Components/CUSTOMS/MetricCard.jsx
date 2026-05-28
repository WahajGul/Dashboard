import { TrendingUp } from "lucide-react";
const MetricCard = ({ title, value, change, icon, color }) => (
    <div
        className="bg-white rounded-xl shadow-md p-6 border-l-4"
        style={{ borderColor: color }}
    >
        <div className="flex justify-between items-start">
            <div>
                <p className="text-slate-600 text-sm font-medium">{title}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                    {value}
                </p>
                <div className="flex items-center gap-1 mt-2">
                    <TrendingUp
                        size={16}
                        className={
                            change >= 0 ? "text-green-500" : "text-red-500"
                        }
                    />
                    <span
                        className={
                            change >= 0 ? "text-green-500" : "text-red-500"
                        }
                    >
                        {change >= 0 ? "+" : ""}
                        {change}%
                    </span>
                </div>
            </div>
            <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${color}20` }}
            >
                {icon}
            </div>
        </div>
    </div>
);

export default MetricCard;
