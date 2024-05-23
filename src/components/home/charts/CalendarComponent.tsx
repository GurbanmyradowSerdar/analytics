import { IClassNameProps } from "../../../types";
import ChartCardWrapper from "./ChartCardWrapper";

const CalendarComponent = ({ className }: IClassNameProps) => {
  return (
    <ChartCardWrapper className={`${className} flex justify-center`}>
      <table className="text-center w-2/3 max-lg:w-1/2">
        <thead>
          <tr className="text-xs uppercase text-center max-lg:text-[11px]">
            <th className="p-4 max-lg:p-3">Mon</th>
            <th className="p-4 max-lg:p-3">Tue</th>
            <th className="p-4 max-lg:p-3">Wed</th>
            <th className="p-4 max-lg:p-3">Thu</th>
            <th className="p-4 max-lg:p-3">Fri</th>
            <th className="p-4 max-lg:p-3">Sat</th>
            <th className="p-4 max-lg:p-3">Sun</th>
          </tr>
        </thead>
        <tbody className="text-sm text-text-main-color max-lg:text-xs">
          <tr>
            <td></td>
            <td className="p-4 max-lg:p-3">1</td>
            <td className="p-4 max-lg:p-3">2</td>
            <td className="p-4 max-lg:p-3">3</td>
            <td className="p-4 max-lg:p-3">4</td>
            <td className="p-4 max-lg:p-3">5</td>
            <td className="p-4 max-lg:p-3">6</td>
          </tr>
          <tr>
            <td className="p-4 max-lg:p-3">7</td>
            <td className="p-4 max-lg:p-3">8</td>
            <td className="p-4 max-lg:p-3">9</td>
            <td className="p-4 max-lg:p-3">10</td>
            <td className="p-4 max-lg:p-3">11</td>
            <td className="p-4 max-lg:p-3">12</td>
            <td className="p-4 max-lg:p-3">13</td>
          </tr>
          <tr>
            <td className="p-4 max-lg:p-3">14</td>
            <td className="p-4 max-lg:p-3">15</td>
            <td className="p-4 max-lg:p-3">16</td>
            <td className="p-4 max-lg:p-3">17</td>
            <td className="p-4 max-lg:p-3">18</td>
            <td className="p-4 max-lg:p-3">19</td>
            <td className="p-4 max-lg:p-3">20</td>
          </tr>
          <tr>
            <td className="p-4 max-lg:p-3">21</td>
            <td className="p-4 max-lg:p-3">22</td>
            <td className="p-4 max-lg:p-3">23</td>
            <td className="p-4 max-lg:p-3">24</td>
            <td className="p-4 max-lg:p-3">25</td>
            <td className="p-4 max-lg:p-3">26</td>
            <td className="p-4 max-lg:p-3">27</td>
          </tr>
          <tr>
            <td className="p-4 max-lg:p-3">28</td>
            <td className="p-4 max-lg:p-3">29</td>
            <td className="p-4 max-lg:p-3">30</td>
            <td className="p-4 max-lg:p-3">31</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </ChartCardWrapper>
  );
};

export default CalendarComponent;
