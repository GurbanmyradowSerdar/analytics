import { IClassName } from "../../../../types";
import ChartCardWrapper from "./ChartCardWrapper";

const CalendarComponent = ({ className }: IClassName) => {
  return (
    <ChartCardWrapper className={`${className} flex justify-center`}>
      <table className="text-center w-9/12 max-lg:w-1/2 max-xl:w-2/3">
        <thead>
          <tr className="text-xs uppercase text-center max-lg:text-[11px]">
            <th className="p-5 max-lg:p-3 max-xl:p-4">Mon</th>
            <th className="p-5 max-lg:p-3 max-xl:p-4">Tue</th>
            <th className="p-5 max-lg:p-3 max-xl:p-4">Wed</th>
            <th className="p-5 max-lg:p-3 max-xl:p-4">Thu</th>
            <th className="p-5 max-lg:p-3 max-xl:p-4">Fri</th>
            <th className="p-5 max-lg:p-3 max-xl:p-4">Sat</th>
            <th className="p-5 max-lg:p-3 max-xl:p-4">Sun</th>
          </tr>
        </thead>
        <tbody className="text-sm text-text-main-color max-lg:text-xs">
          <tr>
            <td></td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">1</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">2</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">3</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">4</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">5</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">6</td>
          </tr>
          <tr>
            <td className="p-5 max-lg:p-3 max-xl:p-4">7</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">8</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">9</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">10</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">11</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">12</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">13</td>
          </tr>
          <tr>
            <td className="p-5 max-lg:p-3 max-xl:p-4">14</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">15</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">16</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">17</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">18</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">19</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">20</td>
          </tr>
          <tr>
            <td className="p-5 max-lg:p-3 max-xl:p-4">21</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">22</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">23</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">24</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">25</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">26</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">27</td>
          </tr>
          <tr>
            <td className="p-5 max-lg:p-3 max-xl:p-4">28</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">29</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">30</td>
            <td className="p-5 max-lg:p-3 max-xl:p-4">31</td>
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
